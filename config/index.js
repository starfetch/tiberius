import { version } from '../package.json'

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: 'tiberius',
  version,
  design: 'starf',
  code: 'starf',
  department: 'tops',
  type: 'pattern',
  difficulty: 1,
    tags: [
	'freesewing',
	'design',
	'diy',
	'fashion',
	'made to measure',
	'parametric design',
	'pattern',
	'sewing',
	'sewing pattern',
  ],
  optionGroups: {
      fit:
      ['headRatio','armholeDrop']
      ,
      style: ['lengthBonus','widthBonus',
	      {clavi: ['clavi','clavusPosBonus','clavusWidth', ]},
	      'length',
	      'width',
	     ],
      advanced: ['forceWidth']

  },
    measurements: [
	'head',
	'shoulderToElbow',
	'shoulderToShoulder',
	'biceps',
	'hpsToWaistBack',
	'waistToKnee',
	'waist',
	'chest',
	'seat',
	'hips',
	'waistToFloor',
	'waistToUpperLeg'
    ],
  dependencies: {},
  inject: {},
    hide: [],
    parts: ['tunica',
    ],
  options: {
      headRatio: {pct: 100, min: 80, max: 120},
      armholeDrop: { pct: 110, min: 100, max: 150 }, 
      lengthBonus:{ pct: 90, min: 60, max: 130 }, 
      widthBonus: {pct: 100, min:50, max: 130},
      clavi: {bool: false},
      clavusPosBonus: {pct: 105, min: 90, max: 130},
      clavusWidth: {pct: 100, min: 50, max: 150},
      length: {
	  list: ['ToKnee',
		 'ToMidLeg','ToFloor'],
	  dflt: 'ToKnee'
      },
      width: {
	  list: ['ToElbow', 'ToShoulder', 'ToMidArm'],
	  dflt: 'ToMidArm'
      },
      // advanced
      forceWidth: {bool: false}  
  },
}
