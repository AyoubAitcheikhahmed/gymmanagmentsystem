import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  lastName: faker.person.fullName(),
  firstName: faker.person.firstName(),
  activity: sample(['Full contact', 'Takewando','Bodybuilding']),
  status: sample(['active', 'not active']),
}));
