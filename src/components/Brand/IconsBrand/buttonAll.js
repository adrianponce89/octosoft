import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const ButtonAll = ({files}) => {
  const classes = useStyles();

  const toDataURL = (url) =>{
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        }),
    );
  }

  const onDownloadZip = async () => {
    let zip = new JSZip();
    let img = zip.folder('logos');

    files.map( async (file,index) => {
      const dataUrl = await toDataURL(file)
      console.log('mapping', dataUrl);
      let array = [];
      array = dataUrl.split(',');
      img.file(`octoLogo${index}`, array[1], { base64: true });
    })

    zip.generateAsync({ type: 'blob' }).then(function (content) {
      saveAs(content, 'logosOctosoft.zip');
    });
  };
  
  return (
    <Button className={classes.button} onClick={() => onDownloadZip()}>
      DOWNLOAD ALL LOGOS
    </Button>
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
