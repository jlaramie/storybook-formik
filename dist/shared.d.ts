import { FormikConfig } from 'formik';
export declare const ADDON_ID = "storybookjs/formik";
export declare const PANEL_ID: string;
export declare const PARAM_KEY = "formik";
export declare const EVT_RENDER = "formik/render";
export declare const EVT_SUBMIT = "formik/submit";
export declare const EVT_ON_SUBMIT = "formik/on-submit";
declare type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export declare type ConfigWithoutExtra<Values = any> = PartialBy<Omit<FormikConfig<Values>, 'initialValues'> & {
    castArgs?: boolean;
    initialValues?: Values;
}, 'onSubmit' | 'castArgs'>;
export interface DecoratorParams<Values = any> {
    formik: ConfigWithoutExtra<Values>;
}
export {};
