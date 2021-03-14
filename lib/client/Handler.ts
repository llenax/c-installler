export default class DiscordManager {
  private client: any;
  private settings: any;

  constructor(client: any) {
    this.client = client;
    this.settings = {
      prefix: null,
      cs: null,
      dm: null,
    };
    this._vOptions();
  }

  public get commands() {
    return this.client.listeners;
  }

  public load(fn: any, reqs: any = {}, client = this.client.client) {
    if (!this.client.listeners[fn.name]) {
      const listener = async (message: any) => {
        if (
          !message.author.bot &&
          (message.channel.type === "dm") === (this.settings.dm || false)
            ? true
            : message.channel.type === "text"
        ) {
          if (this.settings.cs || false) {
            message.content =
              message.content.split(" ").shift().toLowerCase() +
              " " +
              message.content.split(" ").slice(1).join(" ");
          }

          const check_prefix = (msg: string, e: Array<string>) => {
            return e.map((z) => {
              return msg.startsWith(z);
            });
          };

          if (
            (this.settings.prefix ? true : (this.settings.prefix = "!")) &&
            Array.isArray(this.settings.prefix)
              ? check_prefix(message.content, this.settings.prefix).includes(
                  true
                )
              : message.content.startsWith(this.settings.prefix)
          ) {
            if (
              message.content
                .split(" ")
                .shift()
                .slice(
                  typeof this.settings.prefix === "string"
                    ? this.settings.prefix.length
                    : this.settings.prefix[
                        check_prefix(
                          message.content,
                          this.settings.prefix
                        ).indexOf(true)
                      ].length
                ) === fn.name
            ) {
              Object.assign(reqs, {
                client: client,
                msg: message,
                args: message.content.split(" ").slice(1),
              });
              fn.call(this, reqs);
            }
          }
        }
      };

      client.on("message", listener);
      this.setListener(fn.name, listener);
      if (!this.client.props.get(fn.name)) {
        this.client.setProps(fn.name, fn);
      }
    }
  }

  public unload(name: string) {
    this.removeListener(name, "message");
  }

  public removeListener(
    name: string,
    type: string,
    client = this.client.client
  ) {
    function size(obj: Object) {
      var size = 0,
        key: any;
      for (key in obj) {
        if (key in obj) size++;
      }
      return size;
    }

    if (this.client.listeners[name]) {
      client.removeListener(type, this.client.listeners[name]);
      delete this.client.listeners[name];
      if (size(this.client.listeners) < 1) {
        delete this.client.listeners;
      }
    }
  }

  public setListener(k: string, v: any): void {
    if (!this.client.listeners) {
      this.client.listeners = {};
    }
    this.client.listeners[k] = v;
  }

  private _vOptions(client = this.client.client) {
    if (!client.ws) {
      throw new TypeError("CLIENT_MISSING");
    }
  }
}
