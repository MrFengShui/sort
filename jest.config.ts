import { Config } from 'jest';

// const config: Config = {
//     collectCoverage: true,
//     coverageDirectory: "coverage/sort",
//     preset: 'jest-preset-angular',
//     setupFilesAfterEnv: ['./jest.setup.ts'],
//     testMatch: ['**/test/**/*.spec.ts'],
//     testPathIgnorePatterns: [
//         "<rootDir>/dist",
//         "<rootDir>/node_modules"
//     ],
//     verbose: true
// }

// export default config;

export default async (): Promise<Config> => {
    return {
        collectCoverage: true,
        coverageDirectory: "coverage/sort",
        preset: 'jest-preset-angular',
        setupFilesAfterEnv: ['./jest.setup.ts'],
        testMatch: ['**/test/**/*.spec.ts'],
        testPathIgnorePatterns: [
            "<rootDir>/dist",
            "<rootDir>/node_modules"
        ],
        verbose: true
    }
}
