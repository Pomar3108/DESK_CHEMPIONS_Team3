
import { expect, test } from 'vitest';
import { GET } from '../src/app/api/add-player-deskchampions/route'; // Update with your actual file path

test('GET function inserts data into Team_Standings and returns all standings', async () => {
  // Mock request object
  const mockRequest = {
    url: '/?team=TeamA&wins=3&draws=2&loses=1&goalsdifference=10&points=11',
    cache: 'default', // Add any other necessary properties
    credentials: 'same-origin',
    destination: 'document',
    headers: new Headers(),
    // Add any other necessary properties according to the Request type
  };

  // Mock response object
  const mockResponse = {
    json(data: any) {
      // Verify that the response contains the expected data
      expect(data).toEqual({ names: [{ team: 'TeamA', wins: 3, draws: 2, loses: 1, goalsDifference: 10, points: 11 }] });
    }
  };

  // Execute the GET function
  await GET(mockRequest as any, mockResponse ); // Cast mockRequest and mockResponse as 'any'

  // Assert that the response contains the expected data
  expect.assertions(1);
});
