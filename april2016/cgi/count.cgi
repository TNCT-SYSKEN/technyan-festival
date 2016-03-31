#!/usr/bin/perl

#
# (c) 2015 windyakin
#

use strict;
use warnings;

if ( !($ARGV[0] =~ /^([0-9]+)$/) ) {
	print "Content-type: plain/text\n\n";
	print "Oh shit!!\n";
	exit;
}

my $score = 0;
my $play = 0;

if ( open( CNT, "+< ./score.dat" ) ) {
	flock( CNT, 2 );
	$score = <CNT>;
	if($score < $ARGV[0]) {
		$score = $ARGV[0] ;
	}
	seek( CNT, 0, 0 );
	print CNT $score;
	close( CNT );
}

if ( open( CNT, "+< ./play.dat" ) ) {
	flock( CNT, 2 );
	$play = <CNT>;
	$play++;
	seek( CNT, 0, 0 );
	print CNT $play;
	close( CNT );
}

print "Content-type: application/json\n";
print "Access-Control-Allow-Origin: *\n";
print "Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept\n\n";
print '{"play": '.$play.', "score": '.$score.'}'."\n";

exit;

__END__