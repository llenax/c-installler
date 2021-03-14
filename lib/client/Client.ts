import DiscordHandler from "./Handler";

export class Client {
  private props: Map<string, any>;
  private listeners: object;
  private _props: object;

  constructor(options: any = {}) {
    this.props = new Map();
    this.listeners = {};
    // this._props = {};

    if (options.client) {
      Object.defineProperty(this, "client", { value: options.client });
    }

    Object.defineProperty(this, "discord", { value: new DiscordHandler(this) });
  }

  public setProps(k: string, v: any) {
    if (typeof k === "string") {
      // this._props = [...this.props.set(k, v).entries()].reduce(
      //   (obj, [key, value]) => ((obj[key] = value), obj),
      //   {}
      // );
      this.props.set(k, v);
    }
    return this.props;
  }

  public delProps(k: string) {
    if (typeof k === "string") {
      this.props.delete(k);
    }
  }

  run() {}
  load() {}
  unload() {}
}
