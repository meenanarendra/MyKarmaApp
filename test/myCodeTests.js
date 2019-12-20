define('myCodeTests',['require','jquery','src/myCode'],function (require,$,myCode) {
    
describe('Top test', function () {
    describe('#endsWith()', function () {
          
        var spy = sinon.spy(myCode,"print");
       
        it('should return true when the value ends with the suffix', function () {
            var el = document.createElement('div');
            expect(el.nodeName).eql('DIV');
            assert.equal(true, myCode.endsWith("abcd", "cd"));
        });

        it('should return false when the value does not end with the suffix', function () {
            assert.equal(false, myCode.endsWith("abcd", "cde"));
        });

        it('should print the hello', function () {
            myCode.print("hello");
            assert.equal(true,spy.called);
            expect(spy.called).eql(true);
        });
    });
});

});