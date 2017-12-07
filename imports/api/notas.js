import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Notas = new Mongo.Collection('notas');

if (Meteor.isServer) {
	Meteor.publish('notas', function () {
		return Notas.find({userId: this.userId});
	});
}
// if (Meteor.isServer) {
// 	Meteor.publish('email', () => {
// 		return Notas.find({_id: this.userId},{fields:1, profile:1 });
// 	});
// }

Meteor.methods({
	'nota.insert'(noteName){
		if(!this.userId) {
			throw new Meteor.Error('no tienes autorización para realizar esa acción.');
		}
		Notas.insert({
		noteName,
		userId: this.userId
		});
	}
}); 

Meteor.methods({
	sumaNumeros(a, b) {
		if (typeof a !== 'number' || typeof b !== 'number') {
			throw new Meteor.Error('argumento invalido', 'se esperan 2 numeros');
		} else {
			return a + b;
		}
	}
});