import MovieIcon from "@material-ui/icons/Movie";
import ImageIcon from "@material-ui/icons/Image";
import FolderIcon from "@material-ui/icons/Folder";
import ReportIcon from "@material-ui/icons/Report";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";

export const iconSelector = (ext) => {
  switch (ext) {
    case "docx":
      return <ReportIcon />;
    case "mp3":
      return <AudiotrackIcon />;
    case "mp4":
      return <MovieIcon />;
    case "jpg":
      return <ImageIcon />;
    case "png":
      return <ImageIcon />;
    case "jpeg":
      return <ImageIcon />;
    case "csv":
      return <ReportIcon />;
    case "xls":
      return <ReportIcon />;
    case "xlsx":
      return <ReportIcon />;
    case "pdf":
      return <ReportIcon />;
    default:
      return <FolderIcon />;
  }
};
