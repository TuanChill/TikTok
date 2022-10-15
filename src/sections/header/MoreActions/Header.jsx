import React from 'react';
import styles from './MenuSection.module.scss';
import classNames from 'classnames/bind';
import { ArrowToLeft } from '~/components/Icons';

const cx = classNames.bind(styles);
export default function Header({ title, onBack }) {
    return (
        <div className={cx('header')}>
            <div className={cx('icon-back')} onClick={onBack}>
                <ArrowToLeft />
            </div>
            <h2 className={cx('header-title')}>{title}</h2>
        </div>
    );
}
