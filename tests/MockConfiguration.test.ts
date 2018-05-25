import { IConfigurationManager } from '../src/interfaces/IConfigurationManager';

export class MockConfiguration implements IConfigurationManager {
    Environment: string = 'test';
}