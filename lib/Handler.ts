import { Utils } from "./util/Util";
import * as DiscordJS from "discord.js";

export class Handler {
  private listeners: any;
  private settings: any;
  private client: DiscordJS.Client;

  constructor(client: DiscordJS.Client, settings: any = {}) {
    this.listeners = {};
    this.settings = {};

    Object.assign(this.settings, {
      prefix: settings.prefix || ["!"],
      cs: null,
      dm: null,
    });

    if (!Array.isArray(this.settings.prefix)) {
      throw new TypeError("Prefix cannot be anything except string Array.");
    }
    this._handler = this._handler.bind(this);

    this.client = client;
  }

  public listen() {
    this.client.on("message", this._handler);
  }

  public get commands() {
    return this.listeners;
  }

  public loadCommand(fn: any) {
    if (typeof fn === "function") {
      this.listeners[fn.name] = fn;
    }
  }

  public loadCommands(fnArray: Array<any>) {
    if (Array.isArray(fnArray)) {
      fnArray.forEach((fn) => {
        if (typeof fn === "function") {
          this.listeners[fn.name] = fn;
        }
      });
    }
  }

  public unloadCommand(name: string) {
    delete this.listeners[name];
  }

  private _handler(message: DiscordJS.Message) {
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

    if (prefix && cmd) {
      if (cmd in this.listeners) {
        this.listeners[cmd].call(this, { message, args });
      }
    }
  }
}
