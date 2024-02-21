import { expect, test } from 'vitest';
import { GET } from '../src/app/api/create-table-deskchampions/route'; // Update with your actual file path
import { sql } from "@vercel/postgres";

test('GET function creates Team_Standings table if it does not exist', async () => {
  const mockRequest = {};
  const mockResponse = {
    json(data: any, options: any) {
      expect(options.status).toBe(200);
      expect(data.result.command).toBe('CREATE');
    }
  };
  const mockSql = jest.spyOn(sql, 'query');
  mockSql.mockResolvedValueOnce({ rows: [], rowCount: 0, command: 'CREATE' });

  await GET(mockRequest as any, mockResponse as any);
  expect(mockSql).toHaveBeenCalledWith(expect.stringContaining('CREATE TABLE IF NOT EXISTS Team_Standings'));
  expect.assertions(3);
  mockSql.mockRestore();
});
