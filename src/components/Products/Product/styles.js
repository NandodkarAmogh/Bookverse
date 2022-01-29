import { makeStyles } from '@material-ui/core/styles';

const LINES_TO_SHOW = 4;
export default makeStyles(() => ({
  
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
  },
  media: {
    height: 200,
    paddingTop: '100%' // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": LINES_TO_SHOW,
    "-webkit-box-orient": "vertical"
  }
}));