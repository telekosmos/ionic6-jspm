'use strict';

import HelperFactory from './helper.factory';

const ROOT_JS = '/js';
const helperModule = {};

export let factory = HelperFactory(ROOT_JS);

helperModule.ROOT_JS = ROOT_JS;
helperModule.factory = factory;
export default helperModule;