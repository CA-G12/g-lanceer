import app from './app';

const port:number = app.get('port');

app.listen(port, () => {
  console.log(`the server is running on http://localhost:${port}`);
});