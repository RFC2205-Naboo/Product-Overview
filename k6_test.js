import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 1000 },
  ]
}

export default () =>{
  let products = http.get('http://localhost:3000/products');
  let specificProduct = http.get('http://localhost:3000/products/5');
  let specificProductStyle = http.get('http://localhost:3000/products/5/styles');
  check(specificProductStyle, { 'status was 200': r => r.status == 200 });
  sleep(1);
}
