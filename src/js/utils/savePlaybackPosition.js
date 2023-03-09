export default data => {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};
