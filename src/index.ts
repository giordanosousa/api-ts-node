import { server } from './server/Server';
import 'dotenv/config';
const PORT = process.env.PORT || 3333

server.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
});