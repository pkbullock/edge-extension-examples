import { Image, Body1, Display } from '@fluentui/react-components';
import React, { Fragment } from 'react';

const SidebarComponent: React.FC<{ data: any }> = ({ data }) => {
    console.log('sidebar-example: SidebarComponent', data);

    return <Fragment>

        <Display>Welcome</Display>
        <Image src="https://placehold.co/500x200" fit="cover" />
        <Body1>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.

            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
        </Body1>

        <Body1>{typeof data === 'object' ? "Hello, this is the side bar, you selected:" + JSON.stringify(data) : data}</Body1>
    </Fragment>;
};

export default SidebarComponent;