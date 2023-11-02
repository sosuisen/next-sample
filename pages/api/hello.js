// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');

export default async function handler(req, res) {
  const response = await axios ({
    url: 'https://yahoo.co.jp',
  });
  console.log(response);

  // ここで、responseを使って何かする

  // 呼び出し元に返すデータを作成
  const data = { name: 'John Doe' };

  // データはJSON形式で返す  
  res.status(200).json(data);
}
