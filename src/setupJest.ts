import 'jest-preset-angular/setup-jest';
import { server } from './mocks/node';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());