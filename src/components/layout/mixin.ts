import Vue from "vue";
import Component from "vue-class-component";
import { UserModule } from "@/store/modules/user";
import { NavigationModule } from "@/store/modules/navigation";

@Component
export class Profile extends Vue {
  get userName() {
    return UserModule.profile.name;
  }
  get userEmail() {
    return UserModule.profile.email;
  }
  get userAvatarImage() {
    return UserModule.profile.avatarImage
      ? UserModule.profile.avatarImage
      : "@/assets/images/avatar-url-default.png";
  }
}

@Component
export class Nav extends Vue {
  get myPageMenu() {
    return NavigationModule.myPageMenu;
  }
  get customerServiceMenu() {
    return NavigationModule.customerServiceMenu;
  }
  get drawer() {
    return NavigationModule.drawer;
  }
  set drawer(value: boolean) {
    this.$store.commit("updateDrawer", value);
  }
}
