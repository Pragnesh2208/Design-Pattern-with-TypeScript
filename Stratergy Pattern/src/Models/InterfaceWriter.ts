export default interface IWriter {
  write: <T>(result: T) => void;
}
