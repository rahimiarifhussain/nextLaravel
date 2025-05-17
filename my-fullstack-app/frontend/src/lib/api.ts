export async function getHelloMessage() {
  const res = await fetch('http://127.0.0.1:8000/api/hello', {
    cache: 'no-store', // تا همیشه جدیدترین داده‌ها را بگیره
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function getHelloMessage2() {
  const res = await fetch('http://127.0.0.1:8000/api/message2', {
    cache: 'no-store', // تا همیشه جدیدترین داده‌ها را بگیره
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
