/**
 * Created by lyz on 2019/7/16.
 */

import React from 'react';

import {Button} from 'antd';

import styles from './index.module.less'

export default function Home(props) {
    return (
        <div className={styles.container}>
            home
            <Button>button</Button>
        </div>
    )
}