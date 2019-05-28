module.exports = function main(x) {
	
	var lcd_number = '._....._.._....._.._.._.._.._.|.|..|._|._||_||_.|_...||_||_||_|..||_.._|..|._||_|..||_|..|';
	var lcd = '';
	for(var i = 0; i < 3; i++)
	{
		
		for(var j = 0; j < x.length; j++)
		{
			var number = Number(x[j]);
			lcd = lcd + lcd_number.substr(30 * i + 3 * number , 3);
			if( j != (x.length - 1))
			{
				lcd = lcd + ' ';
			}
			else
			{
				lcd = lcd + '\n';
			}
		}
	}
	return lcd;
	
};