export const stateCleaner = (
  bucketList: string[],
  cleaningFun: (key: string, value: string) => void
) => {
  for (let i = 0; i < bucketList.length; i++) {
    cleaningFun(bucketList[i], "");
  }
};
