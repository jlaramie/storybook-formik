import React from 'react';
import addons, { types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { ADDON_ID, PANEL_ID, PARAM_KEY } from './shared';
import { FormikPanel } from './FormikPanel';
addons.register(ADDON_ID, function () {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: 'Formik',
        render: function (_a) {
            var active = _a.active, key = _a.key;
            return (React.createElement(AddonPanel, { active: !!active, key: key },
                React.createElement(FormikPanel, null)));
        },
        paramKey: PARAM_KEY,
    });
});
//# sourceMappingURL=register.js.map