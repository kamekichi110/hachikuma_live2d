/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

"use strict";
const fs = require('fs');
const publicResources = [
  {src: '../../../../CubismSdkForWeb/Core/live2dcubismcore.js', dst: './public/Core/live2dcubismcore.js'},
  {src: '../../../Core/CRI/live2dcubismmotionsynccore.js', dst: './public/Core/CRI/live2dcubismmotionsynccore.js'},
  {src: 'src/lappaudioworkletprocessor.js', dst: './public/src/lappaudioworkletprocessor.js'},
  {src: '../../Resources', dst: './public/Resources'},
];

publicResources.forEach((e)=>{if (fs.existsSync(e.dst)) fs.rmSync(e.dst, { recursive: true })});
publicResources.forEach((e)=>fs.cpSync(e.src, e.dst, {recursive: true}));
