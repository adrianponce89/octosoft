import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import {filesZip, files3DZip} from '../../../utils/logosBase64'

const ButtonAll = () => {
  const classes = useStyles();

  const onDownloadZip = async () => {
    let zip = new JSZip();
    const { arrayFiles } = filesZip;
    const { arrayFiles3D } = files3DZip;
    let folder = zip.folder('Logos');
    let folder3D = zip.folder('Animated Logos')
    arrayFiles.map(file => {
      folder.file(file.name, file.base64, { base64: true });
    })
    arrayFiles3D.map((file) => {
      folder3D.file(file.name, file.base64, { base64: true });
    });
    zip.generateAsync({ type: 'blob' }).then(function (content) {
      saveAs(content, 'logosOctosoft.zip');
    });
  };
  
  return (
    <>
    <Button className={classes.button} onClick={() => onDownloadZip()}>
     DOWNLOAD ALL LOGOS
    </Button>
    
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
