import { ITokenRepository } from "@/repository/localTokenRepository";
// interface
// fetch(endPoint:string, options: {}):Response

export class HttpClient {
  base_url: string;
  tokenRepository: ITokenRepository;

  constructor(base_url, tokenRepository) {
    this.base_url = base_url;
    this.tokenRepository = tokenRepository;
  }

  fetch(endPoint, options: { headers }) {
    return window.fetch(`${this.base_url}${endPoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.tokenRepository.get()}`,
        ...options.headers,
      },
    });
  }
}
