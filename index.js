function diaSem(){
	var agora = new Date()
	var dia = agora.getDay()

	switch(dia){
	case 0:
		dia = 'domingo'
		console.log('Hoje é Domingo')
		break
		case 1:
			dia = 'segunda'
			console.log('Hoje é Segunda')
			break
				case 2:
					console.log('Hoje é Terça')
					dia='terça'
					break
						case 3:
						console.log('Hoje é Quarta')
						dia='quarta'
						break
							case 4:
							console.log('Hoje é Quinta')
							dia='quinta'
							break
								case 5:
								console.log('Hoje é Sexta')
								dia = 'sexta'
								break
									case 6:
									console.log('Hoje é Sábado')
									dia = 'sabado'
									break
										default:
										console.log('[ERRO] Dia Inválido')
	}
	window.document.getElementById('diaSem').innerHTML+=dia
}
window.onload=function() {
	diaSem()
}