import {
  InjectionToken,
  Injector,
  Provider,
  ReflectiveInjector,
  Type
} from "injection-js";

export type TokenType<T> = Type<T> | InjectionToken<T>;

export class DependencyInjection {
  providers: Provider[] = [];
  injector: Injector | null = null;

  registerProviders(providers: Provider[] = []): void {
    this.providers = this.providers.concat(providers);
  }

  regenerateInjector() {
    this.injector = ReflectiveInjector.resolveAndCreate(this.providers);
  }

  getInjector(): Injector {
    if (!this.injector) {
      this.regenerateInjector();
    }

    return this.injector as Injector;
  }
}
