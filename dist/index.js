var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Formik, Form } from 'formik';
import addons, { makeDecorator } from '@storybook/addons';
import { EVT_ON_SUBMIT, EVT_RENDER, EVT_SUBMIT, } from './shared';
export var withFormik = makeDecorator({
    name: 'withFormik',
    parameterName: 'formik',
    skipIfNoParametersOrOptions: false,
    wrapper: function (getStory, context, _a) {
        var parameters = _a.parameters;
        var channel = addons.getChannel();
        var submitter;
        channel.on(EVT_SUBMIT, function () { return submitter && submitter(); });
        var formikConfig = parameters;
        var initialValues = context.args || (formikConfig && formikConfig.initialValues) || {};
        if (context.args &&
            formikConfig &&
            !formikConfig.initialValues &&
            formikConfig.validationSchema &&
            parameters.castArgs) {
            initialValues = formikConfig.validationSchema.cast(initialValues);
        }
        return (React.createElement(Formik, __assign({ enableReinitialize: true, onSubmit: function (v, _a) {
                var setSubmitting = _a.setSubmitting;
                channel.emit(EVT_ON_SUBMIT, v);
                setSubmitting(false);
            } }, formikConfig, { initialValues: initialValues }), function (props) {
            channel.emit(EVT_RENDER, props);
            if (!submitter) {
                submitter = props.submitForm;
            }
            return React.createElement(Form, null, getStory(context));
        }));
    },
});
export default withFormik;
//# sourceMappingURL=index.js.map