import config from "../config";

export class UrlBuilder {
  private url: string;
  private resource: string;
  private params: Record<string, string | number>;
  private noParam: boolean;

  constructor() {
    this.url = `${config.BASE_URL}`;
    this.resource = "";
    this.params = {};
    this.noParam = false;
  }

  path(path: string): UrlBuilder {
    this.resource = `/${path}`;
    return this;
  }

  apiKey(): UrlBuilder {
    this.params["api_key"] = `${config.API_KEY}`;
    return this;
  }

  param(key: string, value: string | number): UrlBuilder {
    this.params[key] = value;
    return this;
  }

  noParams(): UrlBuilder {
    this.noParam = true;
    return this;
  }

  build(): string {
    let url = this.url + this.resource;
    let params = "";
    if (!this.noParam) {
      params += "?";
    }
    for (const key in this.params) {
      params += `${key}=${this.params[key]}&`;
    }
    return url + params;
  }
}
