
import AndroidIcon from './assets/android.png';
import IOSIcon from './assets/ios.png';


export const DeviceIcon = (name) => {
	if (name.toLowerCase().indexOf('android') !== -1) {
		return AndroidIcon;
	}else if (name.toLowerCase().indexOf('iphone') !== -1) {
		return IOSIcon;
	}
}