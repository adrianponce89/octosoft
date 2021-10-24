import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import {filesZip} from '../../../utils/logosBase64'

const ButtonAll = () => {
  // const [files, setFiles] = useState()
  const classes = useStyles();

  // const convertToBase64 = (filesToconvert) =>{
  //   let arrayFiles = [];
  //   Array.from(filesToconvert).forEach(file =>{
  //     let reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       let array = [];
  //       let base64 = reader.result
  //       array = base64.split(',')
  //       arrayFiles.push({base64: array[1], name: file.name})
  //       console.log(array[1])
  //     };
  //   })
  //   setFiles({...files, arrayFiles})
  // }

  // const toDataURL = (url) =>
  // fetch(url)
  //   .then((response) => response.blob())
  //   .then(
  //     (blob) =>
  //       new Promise((resolve, reject) => {
  //         const reader = new FileReader();
  //         reader.onloadend = () => resolve(reader.result);
  //         reader.onerror = reject;
  //         reader.readAsDataURL(blob);
  //       }),
  //   );
  

  const onDownloadZip = async () => {
    let zip = new JSZip();
    const { arrayFiles } = filesZip;
    let folder = zip.folder('logos');
    arrayFiles.map(file => {
      folder.file(file.name, file.base64, { base64: true });
    })
    zip.generateAsync({ type: 'blob' }).then(function (content) {
      saveAs(content, 'logosOctosoft.zip');
    });
  };
  
  return (
    <>
    <Button className={classes.button} onClick={() => onDownloadZip()}>
     DOWNLOAD ALL LOGOS
    </Button>
    {/* <input type="file" multiple onChange={(e) =>{convertToBase64(e.target.files)}}/> */}
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  button: {
    border: 'solid 1px #33ADFF',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 15,
    width: '30%',
    boxShadow: '-5px -5px 15px 0px #33ADFF40',
    '@media (max-width: 768px)': {
      width: '80%',
    },
  },
}));

export default ButtonAll;
