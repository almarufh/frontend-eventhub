function getDateTime(value) {
  const date = new Date(value);
  const now = new Date();

  const diffMs = date.getTime() - now.getTime();
  const diffSeconds = Math.floor(Math.abs(diffMs) / 1000);

  let distance;

  if (diffMs > 0) {
    if (diffSeconds < 60) {
      distance = `${diffSeconds} detik lagi`;
    } else if (diffSeconds < 3600) {
      distance = `${Math.floor(diffSeconds / 60)} menit lagi`;
    } else if (diffSeconds < 86400) {
      distance = `${Math.floor(diffSeconds / 3600)} jam lagi`;
    } else {
      distance = `${Math.floor(diffSeconds / 86400)} hari lagi`;
    }
  } else if (diffMs < 0) {
    if (diffSeconds < 60) {
      distance = `${diffSeconds} detik yang lalu`;
    } else if (diffSeconds < 3600) {
      distance = `${Math.floor(diffSeconds / 60)} menit yang lalu`;
    } else if (diffSeconds < 86400) {
      distance = `${Math.floor(diffSeconds / 3600)} jam yang lalu`;
    } else {
      distance = `${Math.floor(diffSeconds / 86400)} hari yang lalu`;
    }
  } else {
    distance = 'sekarang';
  }

  return {
    second: date.getSeconds(),
    minute: date.getMinutes(),
    hour: date.getHours(),
    day: date.toLocaleDateString('id-ID', {
      weekday: 'long',
    }),
    date: date.getDate(),
    month: date.toLocaleDateString('id-ID', {
      month: 'long',
    }),
    year: date.getFullYear(),
    distance,
  };
}

export default getDateTime;
