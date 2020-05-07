import store from "@/store";
import {
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";

@Module({dynamic: true, store, name: "app"})
class AppModule extends VuexModule {
  private themeMode = "light";

  @Mutation
  SET_THEME_MODE(mode: string) {
    this.themeMode = mode;
  }

  get isDarkMode() {
    return this.themeMode === "dark";
  }
}

const appModule = getModule(AppModule);

export default appModule;
