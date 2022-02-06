
import { CapacitorProject } from '@capacitor/project';
import { CapacitorConfig } from '@capacitor/cli';

const test = async () => {
    const config: CapacitorConfig = {
        ios: {
            path: 'ios',
        },
        android: {
            path: 'android',
        },
    };

    const project = new CapacitorProject(config);
    await project.load();
    for (const target of project.ios.getTargets()) {
        console.log(`iOS target id=${target.id} name=${target.name}`);
        console.log('=========================');
        console.log('iOS Bundle id', project.ios.getBundleId(target.name, 'Debug'));
        for (const buildConfig of project.ios?.getBuildConfigurations(target.name)) {
            console.log(`${buildConfig.name} getBuild`,project.ios.getBuild(target.name, buildConfig.name));
            console.log(`${buildConfig.name} getVersion`,project.ios.getVersion(target.name, buildConfig.name));
        }
       }

    console.log('Android version name', await project.android.getVersionName());
    console.log('Android version code', await project.android.getVersionCode());
    console.log('Android package name', project.android.getPackageName());
};

test();
