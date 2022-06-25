export function getPostDate(id: number){
  const fullDate = new Date(
    2022,
    new Date().getMonth() - id, 
    15
  );
  const year = fullDate.getFullYear();
  const month = fullDate.getMonth() + 1;
  const date = fullDate.getDate();
  return `${(date < 10) ? '0' + date : date}.${(month < 10) ? '0' + month : month}.${year}`;
}