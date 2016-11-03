import {AppModule} from './app.module';
import { UpgradeAdapter } from '@angular/upgrade';

const upgradeAdapter = new UpgradeAdapter(AppModule);

export default upgradeAdapter; 