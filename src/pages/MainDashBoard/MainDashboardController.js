import {Subject} from 'rxjs';

class MainDashboardCtrl {
  static instance;

  mainDashboardClick = new Subject();
  directorChangeNotifier = new Subject();
  movieChangeNotifier = new Subject();
  resizeBroadcaster = new Subject();
  starChangeNotifier = new Subject();
  studioChangeNotifier = new Subject();
  themeChangeNotifier = new Subject();
  userScrollNotifier = new Subject();

  static getInstance() {
    if (MainDashboardCtrl.instance == null) {
      MainDashboardCtrl.instance = new MainDashboardCtrl();
    }

    return MainDashboardCtrl.instance;
  }

  broadcastWindowResize = () => {
    const instance = MainDashboardCtrl.getInstance();
    instance.resizeBroadcaster.next();
  };

  notifyMainDashboardClick = (event) => {
    const instance = MainDashboardCtrl.getInstance();
    instance.mainDashboardClick.next(event);
  };

  notifyDirectorChange = () => {
    const instance = MainDashboardCtrl.getInstance();
    instance.directorChangeNotifier.next();
  };

  notifyMovieChange = () => {
    const instance = MainDashboardCtrl.getInstance();
    instance.movieChangeNotifier.next();
  };

  notifyStarChange = () => {
    const instance = MainDashboardCtrl.getInstance();
    instance.starChangeNotifier.next();
  };

  notifyStudioChange = () => {
    const instance = MainDashboardCtrl.getInstance();
    instance.studioChangeNotifier.next();
  };

  notifyThemeChange = () => {
    const instance = MainDashboardCtrl.getInstance();
    instance.themeChangeNotifier.next();
  };

  notifyUserScroll = () => {
    const instance = MainDashboardCtrl.getInstance();
    instance.userScrollNotifier.next();
  };
}

export const MainDashboardController = MainDashboardCtrl.getInstance();
