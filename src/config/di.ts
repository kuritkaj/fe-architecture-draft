import { ticketProviders } from "./di/ticket";
import { infrastructureProviders } from "./di/infrastructure";
import {
  DependencyInjection,
  TokenType
} from "/src/lib/di/DependencyInjection";

export const diProviders = [
  // @domainScopedProviders
  ...infrastructureProviders,
  ...ticketProviders
];

let index: DependencyInjection | null = null;

export function getDic(): DependencyInjection {
  if (!index) {
    index = new DependencyInjection();
    index.registerProviders(diProviders);
  }

  return index;
}

export const getService = <T>(token: TokenType<T>) =>
  getDic().getInjector().get(token);
