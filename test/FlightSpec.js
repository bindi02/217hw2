/*
var app = require('./helpers/app');

var should = require('should'),
	supertest = require('supertest');
	
describe('flight', function(){
	 it('should pass',function(done){
	 	done();
	 });
	 
	 it('should not pass',function(done){
	 	throw "dont pass";
	 	done();
	 });
	 

var expect = require('chai').expect;
var assert = require('chai').assert;
var test = require('chai').assert;
var test1 = require ("./helpers/app");
describe("test1",function(){
describe("#expect()",function(){
	 it('should pass',function(){ 
  var foo = 'bar'
  var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.length(3);
expect(beverages).to.have.property('tea').with.length(3);
   });
 });
 
});
 
 	describe("#equal2()", function(){
 		it('should equal',function(){
 		var num1 = 10;
 		var num2 = 10;
 		
 		
 		assert.equal(num1,num2, '==these number are equal');
 	});
 });
 
 describe("#notequal()", function(){
 		it('should not equal',function(){
 		var num1 = 10;
 		var num2 = 10;
 		
 		
 		assert.notEqual(num1,num2, 'these number are not equal');
 	});
 });
 
 describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

		
	var expect = require('chai').expect;

	it("its display true bez its true", function() {
		expect(true).to.be.true;
  				});

	it("its display false statements", function() {
  		
  		expect(1).to.not.be.true;
		});
});    */


var expect = require('chai').expect;
var assert = require('chai').assert;
var test = require('chai').assert;
var test1 = require ("./helpers/app");
describe("caltest()",function(){
	describe("add",function(){
 		it('should do add',function(){
 		var num1 = 10;
 		var num2 = 3;
 		var no;
 		no=num1 + num2;
 		expect(no).to.equal(no);
 		
 		})
 	})
 	
 	describe("subb",function(){
 		it('should do sub',function(){
 			var num1 =10;
 			var num2 = 5;
 			var x;
 			x= num1-num2;
 			expect(x).to.equal(x);
 		
 		})
 	})
	
	describe("multiply",function(){
 		it('should do multiply',function(){
 			var num1 =10;
 			var num2 = 5;
 			var x;
 			x= num1*num2;
 			expect(x).to.equal(x);
 		
 		})
 	})
 	
 	describe("divide",function(){
 		it('should do divide',function(){
 			var num1 =10;
 			var num2 = 5;
 			var x;
 			x= num1/num2;
 			expect(x).to.equal(x);
 		
 		})
 	})
	
	
});
 