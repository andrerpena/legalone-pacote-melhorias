import {assert} from 'chai';
import menuLinker from '../src/lib/menuLinker';

describe('PipelineRunner', () => {
    describe('run', function () {
        it('errors should work', function () {
            let menu = [
                {
                    index: '0',
                    menu: [
                        {
                            index: '0.0',
                            menu: [
                                {
                                    index: '0.0.0'
                                }
                            ]
                        },
                        {
                            index: '0.1',
                            menu: [
                                {
                                    index: '0.1.0'
                                },
                                {
                                    index: '0.1.1'
                                },
                                {
                                    index: '0.1.2'
                                },
                                {
                                    index: '0.1.3'
                                }
                            ]
                        }
                    ]
                }
            ];
            menuLinker.linkMenu(menu);
        });
    });
});