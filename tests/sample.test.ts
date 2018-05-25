import {App} from '../src/app';
import {expect} from 'chai';
import { ConsoleLogger } from '../src/utils/ConsoleLogger';
import * as sinon from 'sinon';
import { MockConfiguration } from './MockConfiguration.test';

describe('Sample Test', () => {
    let logger = new ConsoleLogger();
    let config = new MockConfiguration();

    it('should succeed', () => {
        logger.Info('coverage test');
        expect(true).to.be.equal(true);
    });

    it('should be test environment', () => {
        expect(config.Environment).to.be.equal('test');
    });
});