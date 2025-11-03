const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Audio.Acts.Play
	];
};
self.C3_JsPropNameTable = [
	{fundo: 0},
	{comida_img: 0},
	{mingau_img: 0},
	{brincar_img: 0},
	{titulo: 0},
	{Toque: 0},
	{Áudio: 0},
	{agua_img: 0},
	{vovo_img: 0},
	{desenho_img: 0}
];

self.InstanceType = {
	fundo: class extends self.ISpriteInstance {},
	comida_img: class extends self.ISpriteInstance {},
	mingau_img: class extends self.ISpriteInstance {},
	brincar_img: class extends self.ISpriteInstance {},
	titulo: class extends self.ITextInstance {},
	Toque: class extends self.IInstance {},
	Áudio: class extends self.IInstance {},
	agua_img: class extends self.ISpriteInstance {},
	vovo_img: class extends self.ISpriteInstance {},
	desenho_img: class extends self.ISpriteInstance {}
}