import {getModule, Module, VuexModule} from 'vuex-module-decorators';

@Module
class AppModule extends VuexModule{

}

const appModule=getModule(AppModule);

export default appModule;
