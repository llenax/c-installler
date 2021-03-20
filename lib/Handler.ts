import { Utils } from "./util/Util";
import * as DiscordJS from "discord.js";

export class Handler {
  private listeners: any;
  private settings: any;

  public client: DiscordJS.Client;

  constructor(settings: any) {
    this.listeners = {};

    this.settings = {
      prefix: settings.prefix || ["!"],
      cs: null,
      dm: null,
    };

    if (!Array.isArray(this.settings.prefix)) {
      throw new TypeError("Prefix cannot be anything except string Array.");
    }
    this.listener = this.listener.bind(this);

    this.client = new DiscordJS.Client();
  }

  public get commands() {
    return this.listeners;
  }

  public loadCommand(fn: any) {
    this.listeners[fn.name] = fn;
  }

  public unloadCommand(name: string) {
    delete this.listeners[name];
  }

  public login(token: string) {
    this.client.on("message", this.listener);
    if (token) {
      this.client.login(token);
    } else {
      this.client.login();
    }
  }

  private listener(message: DiscordJS.Message) {
    if (message.author.bot) return;

    const contentArray: Array<string> = message.content.trim().split(/ +/g);
    const cmdString: string = contentArray[0];
    const args: Array<string> = contentArray.slice(1);

    if (this.settings.cs === true) {
      message.content = cmdString.toLowerCase() + " " + args.join(" ");
    }

    const prefix: string = this.settings.prefix
      .filter((prefix: string) => message.content.startsWith(prefix))
      .shift();

    const cmd: string = Utils.removeStr(cmdString, cmdString.indexOf(prefix));

    if (cmd && message.content.startsWith(prefix)) {
      if (cmd in this.listeners) {
        this.listeners[cmd].call(this, {
          msg: message,
          args,
        });
      }
    }
  }
}
